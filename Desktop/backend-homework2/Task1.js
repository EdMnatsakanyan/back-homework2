const paths = require('node:path')

class PathAnalyzer {
    getBaseName(path){
        return paths.basename(path)
    }

    getDirName(path){
        return paths.dirname(path)
    }

    getExtension(path){
        return paths.extname(path)
    }

    isAbsolutePath(path){
        return paths.isAbsolute(path)
    }
}

module.exports = PathAnalyzer
