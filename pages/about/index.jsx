import React from 'react';
import { motion } from 'framer-motion';
import {
  MagicWand,
  Code,
  Users,
  FileText,
  Image,
  QrCode,
  FileDoc,
  FilePdf,
  Scan,
  Scissors,
  ArrowsMerge,
  Intersect,
  FileArchive,
  Key,
} from '@phosphor-icons/react';

const About = () => {
  const tools = [
    { icon: <Image weight="duotone" className="h-6 w-6 text-blue-400" />, name: 'Image to Text' },
    { icon: <FilePdf weight="duotone" className="h-6 w-6 text-blue-400" />, name: 'PDF to DOCX' },
    { icon: <QrCode weight="duotone" className="h-6 w-6 text-blue-400" />, name: 'QR Code Generator' },
    { icon: <FileDoc weight="duotone" className="h-6 w-6 text-blue-400" />, name: 'DOCX to PDF' },
    { icon: <Image weight="duotone" className="h-6 w-6 text-blue-400" />, name: 'Image to PDF' },
    { icon: <Scan weight="duotone" className="h-6 w-6 text-blue-400" />, name: 'QR Code Scanner' },
    { icon: <FilePdf weight="duotone" className="h-6 w-6 text-blue-400" />, name: 'PDF to Image' },
    { icon: <Scissors weight="duotone" className="h-6 w-6 text-blue-400" />, name: 'Image Background Remover' },
    { icon: <ArrowsMerge weight="duotone" className="h-6 w-6 text-blue-400" />, name: 'Merge PDF' },
    { icon: <Intersect weight="duotone" className="h-6 w-6 text-blue-400" />, name: 'Invert Image' },
    { icon: <Image weight="duotone" className="h-6 w-6 text-blue-400" />, name: 'Image to Favicon' },
    { icon: <FileArchive weight="duotone" className="h-6 w-6 text-blue-400" />, name: 'Compress PDF' },
    { icon: <FileText weight="duotone" className="h-6 w-6 text-blue-400" />, name: 'Metadata Extractor' },
    { icon: <Key weight="duotone" className="h-6 w-6 text-blue-400" />, name: 'Password Generator' },
  ];

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-5"
        >
          <div className="inline-block bg-white/5 p-6 rounded-2xl backdrop-blur-sm border border-white/10">
            <MagicWand className="h-12 w-12 text-white mx-auto" weight="duotone" />
            <h2 className="mt-4 text-4xl font-extrabold text-white sm:text-5xl">
              About Us
            </h2>
            <p className="mt-4 text-xl text-blue-200/90">
              Empowering users with powerful tools for everyday tasks
            </p>
          </div>
        </motion.div>

        {/* About Content */}
        <div className="flex flex-col lg:flex-row gap-8 bg-white/5 rounded-3xl shadow-2xl p-8 backdrop-blur-sm border border-white/10">
          {/* Mission Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full lg:w-1/2 space-y-6"
          >
            <h3 className="text-2xl font-bold text-white">Our Mission</h3>
            <p className="text-blue-200">
              We aim to simplify your digital life by providing a suite of powerful, easy-to-use tools
              for document, image, and data manipulation. Whether you're a student, professional, or
              hobbyist, our platform is designed to meet your needs.
            </p>
            <p className="text-blue-200">
              From converting file formats to generating secure passwords, our tools are built with
              precision and efficiency in mind. We believe in making technology accessible to everyone.
            </p>

            <h3 className="text-2xl font-bold text-white">Our Tools</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {tools.map((tool, index) => (
                <div key={index} className="flex items-center space-x-2">
                  {tool.icon}
                  <p className="text-blue-200">{tool.name}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Team Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="w-full lg:w-1/2 bg-gradient-to-br from-blue-900/50 to-gray-900/50 rounded-2xl p-8 space-y-8 relative"
          >
            <div className="absolute top-0 right-0 opacity-10">
              <Users className="h-48 w-48 text-blue-400" />
            </div>
            <div className="space-y-6 relative z-10">
              <h3 className="text-2xl font-bold text-white">Our Team</h3>
              <p className="text-blue-200">
                We are a passionate group of developers, designers, and problem-solvers dedicated to
                creating tools that make your life easier. Our team is driven by innovation and a
                commitment to delivering high-quality solutions.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-blue-600/20 rounded-lg">
                    <Code weight="duotone" className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-blue-100">Developers</p>
                    <p className="text-blue-200">
                      Building robust and scalable solutions for your needs.
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-blue-600/20 rounded-lg">
                    <MagicWand weight="duotone" className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-blue-100">Designers</p>
                    <p className="text-blue-200">
                      Crafting intuitive and visually appealing interfaces.
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-blue-600/20 rounded-lg">
                    <Users weight="duotone" className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-blue-100">Support Team</p>
                    <p className="text-blue-200">
                      Ensuring you have the best experience with our tools.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;