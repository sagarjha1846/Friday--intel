import axios from "axios";

const getTORDomain = async (searchRef) => {
  try {
    const res = await axios.get("https://fridayintel.io/api-dev/darkweb.php", {
      params: {
        domain: searchRef,
      },
    });
    return res;
  } catch (e) {
    return e;
  }
};

const getDomain = async (searchRef) => {
  try {
    const res = await axios.get("https://fridayintel.io/api-dev/domain.php", {
      params: { domain: searchRef },
    });
    return res;
  } catch (error) {
    return error;
  }
};

const getUrl = async (searchRef) => {
  try {
    const res = await axios.get("https://fridayintel.io/api-dev/urls.php", {
      params: { domain: searchRef },
    });
    return res;
  } catch (error) {
    return error;
  }
};

const getFiles = async (searchRef) => {
  try {
    const res = await axios.get("https://fridayintel.io/api-dev/files.php", {
      params: { hash: searchRef },
    });
    return res;
  } catch (error) {
    return error;
  }
};

export { getTORDomain, getDomain, getUrl, getFiles };
