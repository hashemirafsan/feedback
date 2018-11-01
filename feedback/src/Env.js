const Env = {
    mode: "dev",
    dev_url: "http://localhost:5000",
    prod_url: "",
    get auth_url() {
        return this.mode === "dev" ? `${this.dev_url}/auth/` : `${this.prod_url}/auth/`; 
    },
    get api_url() {
        return this.mode === "dev" ? `${this.dev_url}/api/v1/` : `${this.prod_url}/api/v1/`; 
    }
}

export default Env;