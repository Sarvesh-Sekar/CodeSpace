const fs = require('fs').promises;
const path = require('path');

const createfile = async (name, ext, content) => {
    try {
        const filePath = path.join(__dirname, '..', 'files', `${name}${ext}`);
        await fs.writeFile(filePath, content, 'utf-8');
        return 'File created successfully';
    } catch (error) {
        console.error('Error writing file:', error);
        throw error;
    }
};

module.exports = createfile;