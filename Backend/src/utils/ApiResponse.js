class ApiResponse {
    constructor(statusCode, status, message = "Success", data) {
        this.statusCode = statusCode
        this.status = status
        this.message = message
        this.data = data
        this.succes = statusCode < 400
    }
}

export { ApiResponse }