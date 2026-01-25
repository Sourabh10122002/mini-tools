import React, { useState } from 'react';
import { Document, Packer, Paragraph, TextRun } from 'docx';
import * as pdfjsLib from 'pdfjs-dist';
import pdfjsWorker from 'pdfjs-dist/build/pdf.worker.entry';

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker;

const PdfToDocx = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [fileName, setFileName] = useState('');

  const extractStructuredContent = async (file) => {
    const arrayBuffer = await file.arrayBuffer();
    const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
    const docxContent = [];

    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const textContent = await page.getTextContent();

      // Group text items by line
      const lines = {};
      textContent.items.forEach((item) => {
        const y = item.transform[5];
        if (!lines[y]) lines[y] = [];
        lines[y].push(item.str);
      });

      // Sort lines by Y coordinate (top to bottom)
      const sortedLines = Object.keys(lines)
        .sort((a, b) => parseFloat(b) - parseFloat(a))
        .map(y => lines[parseFloat(y)].join(' '));

      // Create paragraphs for each line
      docxContent.push(
        ...sortedLines.map(line =>
          new Paragraph({
            children: [new TextRun(line)],
            spacing: { after: 100 },
          })
        )
      );
    }

    return docxContent;
  };

  const generateDocx = async (content) => {
    const doc = new Document({
      sections: [{
        properties: {},
        children: content,
      }],
    });

    const blob = await Packer.toBlob(doc);
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${fileName.replace('.pdf', '')}_converted.docx`;
    link.click();
    URL.revokeObjectURL(url);
    setIsLoading(false);
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setError(null);
    setIsLoading(true);
    setFileName(file.name);

    try {
      const structuredContent = await extractStructuredContent(file);
      await generateDocx(structuredContent);
    } catch (err) {
      setError('Error processing PDF. Complex layouts may not convert perfectly.');
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold my-14 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
          PDF to DOCX Converter
        </h1>

        <div className="border-2 border-dashed border-blue-300 rounded-lg p-8 text-center bg-transparent">
          <label className="cursor-pointer">
            <input
              type="file"
              accept=".pdf"
              onChange={handleFileUpload}
              className="hidden"
              disabled={isLoading}
            />
            <div className="space-y-4">
              <div className="text-blue-600">
                <svg
                  className="w-12 h-12 mx-auto"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  />
                </svg>
              </div>
              <p className="text-gray-200">
                {isLoading ? 'Converting...' : 'Click to upload PDF or drag and drop'}
              </p>
              {fileName && (
                <p className="text-sm text-gray-500 mt-2">
                  Selected file: {fileName}
                </p>
              )}
              {error && (
                <p className="text-red-500 text-sm mt-2">{error}</p>
              )}
            </div>
          </label>
        </div>

        <div className="mt-4 text-sm text-gray-200">
          <p>Features:</p>
          <ul className="list-disc list-inside">
            <li>Converts text content from PDF to DOCX</li>
            <li>Preserves basic text formatting</li>
            <li>Supports multiple pages</li>
            <li>Downloads converted file automatically</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PdfToDocx;