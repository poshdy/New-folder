import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'


export const client = createClient({
    projectId: '69ye5584',
  dataset: 'production',
  apiVersion: '2021-10-21',
  useCdn: true,
  
})


const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source)
}

