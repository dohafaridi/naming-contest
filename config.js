const env = process.env;

export const nodeEnv = env.nodeEnv || "developpement";

export default {
  port: env.port || 8080,
  host: env.HOST || "localhost",
  get serverURL() {
    return `http://${this.host}:${this.port}`;
  }
};
