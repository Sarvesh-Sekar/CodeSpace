const fs = require('fs').promises;
const path = require('path');

// Function to create a file with the given name, extension, and content
const createfile = async (name, ext, content) => {
    try {
        const dirPath = path.join(__dirname, '..', 'files');
        const filePath = path.join(dirPath, `${name}${ext}`);

        // Ensure the directory exists
        await fs.mkdir(dirPath, { recursive: true });

        // Write the file
        await fs.writeFile(filePath, content, 'utf-8');
        console.log('File created successfully');
    } catch (error) {
        console.error('Error writing file:', error);
        throw error;
    }
};

module.exports = createfile;
