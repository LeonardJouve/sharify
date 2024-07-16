import {withAppBuildGradle, type ConfigPlugin} from '@expo/config-plugins';

const redirectSchemeName = "spotify-sdk";
const redirectHostName = "auth";

const content: string = `
android {
    defaultConfig {
        manifestPlaceholders = [redirectSchemeName: "${redirectSchemeName}", redirectHostName: "${redirectHostName}"]
    }
}`;

const withSharifyConfig: ConfigPlugin = (expoConfig) => withAppBuildGradle(expoConfig, (config) => {
    if (!config.modResults.contents.includes(content)) {
        config.modResults.contents += content;
    }

    return config;
});

export default withSharifyConfig;
