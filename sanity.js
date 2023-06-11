// connect the backend to the frontend.
import { createClient } from "@sanity/client"
import imageUrlBuilder from "@sanity/image-url"
import {SANITY_PROJECT_ID} from "@env"

const client = createClient({
    projectId: `${SANITY_PROJECT_ID}`,
    dataset: "production",
    useCdn: true,
    apiVersion: "2021-08-31"
})

const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source).url()

export default client