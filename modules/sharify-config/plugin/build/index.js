"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_plugins_1 = require("@expo/config-plugins");
const redirectSchemeName = "spotify-sdk";
const redirectHostName = "auth";
const content = `
android {
    defaultConfig {
        manifestPlaceholders = [redirectSchemeName: "${redirectSchemeName}", redirectHostName: "${redirectHostName}"]
    }
}`;
const withSharifyConfig = (expoConfig) => (0, config_plugins_1.withAppBuildGradle)(expoConfig, (config) => {
    if (!config.modResults.contents.includes(content)) {
        config.modResults.contents += content;
    }
    return config;
});
exports.default = withSharifyConfig;
