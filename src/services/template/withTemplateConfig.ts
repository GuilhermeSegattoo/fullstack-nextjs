import path from "path"
import readYamlFile from "read-yaml-file"

interface TemplateConfig {
    site?: {
        title?: string;
        description?: string;
    }
    personal?:{
        name?:string;
        avatar?: string;
        socialNetworks?: {
            linkedin?: string;
            instagram?: string;
            github?: string;
        }
    }
}

export async function withTemplateConfig(props = {}){

    const PATH_TEMPLATE_CONFIG = path.resolve(".", "template-config.yml")

    const templateConfig = await readYamlFile<TemplateConfig>(PATH_TEMPLATE_CONFIG)
    
    return{
        ...props,
        templateConfig,
    }
}