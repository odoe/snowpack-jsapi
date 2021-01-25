module.exports = {
    mount: {
        // doesn't work
        // https://github.com/snowpackjs/snowpack/issues/1286
        // but seems to keep snowpack from trying to build the assets folder??
        // use ncp to copy assets after build
        "node_modules/@arcgis/core/assets": {url: "/assets", static: true, resolve: false},
        "src": "/",
    },
    plugins: [["@snowpack/plugin-webpack"]]
};