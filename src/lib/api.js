import { ManagerCMS } from 'managercms-sdk';

const AUTH_TOKEN = "o65jDLV7i4EKViCf7eYEuRwOjYBaR20bHWIGlGMM5MQbCRgjiHWAtpXQJXcGv-bi";
const sdk = new ManagerCMS(AUTH_TOKEN);

export async function getContentEntries(contentType, params = {}) {
  try {
    return await sdk.getEntries(contentType, params);
  } catch (error) {
    console.error(`Could not load content entries for ${contentType}:`, error);
    throw error;
  }
}

export async function getEntry(contentType, id) {
  try {
    return await sdk.getEntry(contentType, id);
  } catch (error) {
    console.error(`Could not load entry ${id} for ${contentType}:`, error);
    throw error;
  }
}

export async function getSiteConfig() {
  try {
    // We try to get 'sitesettings' as before
    const entries = await sdk.getEntries('sitesettings');
    
    if (entries && entries.length > 0) {
      let menuItems = [];
      const siteConfigRaw = entries[0].data;
      const menuString = siteConfigRaw.menu;
      
      if (menuString) {
        try {
          const jsonStartIndex = menuString.indexOf('{');
          const jsonEndIndex = menuString.lastIndexOf('}');
          if (jsonStartIndex !== -1 && jsonEndIndex !== -1 && jsonEndIndex > jsonStartIndex) {
            const actualJsonString = menuString.substring(jsonStartIndex, jsonEndIndex + 1);
            const menuData = JSON.parse(actualJsonString);
            if (menuData && menuData.main && Array.isArray(menuData.main)) {
              menuItems = menuData.main;
            }
          }
        } catch (e) {
          console.error('Error parsing menu data from site settings:', e);
        }
      }
      
      return {
        ...entries[0],
        menuItems
      };
    }
    throw new Error('Site config not found');
  } catch (e) {
    console.error('Failed to fetch site config:', e);
    throw e;
  }
}

export default sdk;