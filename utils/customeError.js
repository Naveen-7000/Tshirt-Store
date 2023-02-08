// customError takes message and error code since its a class we can make constructor
class CustomError extends Error{
    constructor(message, code){
        super(message)
        this.code = code
    }

}

module.exports = CustomError