module.exports = {
  bail: true, //se tiver um erro em determinado teste, ele para o teste e não executa os outros
  coverageProvide: "v8",
  
  testMatch: [
    "<rootDir>/src/**/*.spec.js"
  ],
}