
const DOMAIN_REGEX = /^https?:\/\/[^\s]+\.[^\s]+$/;
export const getDomainLogo = async (
    domain: string,
    resolution: 'low' | 'medium' | 'high' = 'medium',
  ) => {
    if (!DOMAIN_REGEX.test(domain)) {
      console.error(`Invalid domain: ${domain}`);
      return undefined;
    }
  
    const resolutionMap = {
      low: 100,
      medium: 400,
      high: 850,
    };
  
    const size = resolutionMap[resolution];
    const url = `https://logo.clearbit.com/${domain}?size=${size}`;
    try {
      const response = await fetch(url);
      if (response.status !== 200) {
        console.log("error");
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return url;
    } catch (error) {
      console.error(`Error getting domain logo: ${error}`);
      return undefined;
    }
  };
  