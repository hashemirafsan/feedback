const Env = {
    mode: "dev",
    dev_url: "http://localhost:5000/api/v1",
    prod_url: "",
    get app_url() {
        return this.mode === "dev" ? this.dev_url : this.prod_url; 
    }
}

export default Env;