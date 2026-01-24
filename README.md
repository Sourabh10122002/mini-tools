# Mini Tools 🛠️

A comprehensive suite of web-based utilities designed to simplify everyday digital tasks. Built with modern web technologies for performance and privacy.

## 🚀 Features

Mini Tools offers a wide range of browser-based tools:

### 📄 PDF Tools
*   **Compress PDF**: Reduce PDF file size without losing quality.
*   **Convert PDF**:
    *   DOCX to PDF
    *   Image to PDF
    *   PDF to DOCX
    *   PDF to Image
*   **Manage PDF**:
    *   Merge multiple PDFs into one.
    *   Organize and rearrange PDF pages.
    *   Rotate PDF pages.
*   **Security**:
    *   Lock PDF with password protection.
    *   Unlock password-protected PDFs.

### 🖼️ Image Tools
*   **Background Remover**: AI-powered tool to remove image backgrounds.
*   **Favicon Generator**: Create favicons from your images.
*   **Image to Text**: Extract text from images using OCR technology (Tesseract.js).
*   **Invert Image**: Invert colors of any image.

### 📱 OR & Barcode
*   **QR Code Generator**: Create custom QR codes.
*   **QR Code Scanner**: Scan and decode QR codes directly from your browser.

### 🔐 Security & Privacy
*   **Password Generator**: Generate strong, secure passwords.
*   **Google Authenticator**: Time-based One-Time Password (TOTP) utility.

### 🔍 Other Tools
*   **Metadata Extractor**: specific file metadata extraction tools.

## 🛠️ Tech Stack

*   **Framework**: [Next.js](https://nextjs.org/) (React)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
*   **Animations**: [Framer Motion](https://www.framer.com/motion/)
*   **Icons**: [Phosphor Icons](https://phosphoricons.com/) & [Heroicons](https://heroicons.com/)
*   **Core Libraries**:
    *   `pdf-lib`, `react-pdf`, `pdfjs-dist` (PDF Processing)
    *   `tesseract.js` (OCR)
    *   `qrcode.react`, `@zxing/browser` (QR Code)
    *   `browser-image-compression`, `heic2any` (Image Processing)
    *   `docx`, `docxtemplater` (Document Handling)

## 📦 Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📂 Project Structure

Key directories in the project:

*   `pages/`: Application routes and tool implementations.
*   `components/`: Reusable UI components (Navbar, Card, etc.).
*   `styles/`: Global styles and strict CSS.
*   `public/`: Static assets.

## 🤝 Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn-pages-router) - an interactive Next.js tutorial.
