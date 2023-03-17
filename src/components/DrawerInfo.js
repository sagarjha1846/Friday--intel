import React from 'react';

const DrawerInfo = () => {
  return (
    <div className="drawer">
      <h2>Search Guidelines</h2>
      <hr />
      <h1>Keyword Search</h1>
      <p>
        Friday Intel offers full-text search and retrieves recent darkweb
        content that includes the search keyword.
      </p>
      <p>Just as search engines, put Keybord to search</p>
      <p>
        If there are too many results to study, try a more specific keyword
        search to get more relevant results. To find more specific results, use
        the search operator.
      </p>
      <p>Just as search engines, put Keybord to search</p>
      <h1>Search Operator</h1>
      <p>
        Search operators are special commands that enable advanced full text
      </p>
      <div className="parent">
        <div className="Diff1">
          <h4>Operator Description</h4>
          <hr />
          <p>"" The search results are exact matches to the keywords in""</p>
          <hr />
          <p>AND Search results include both X and Y</p>
          <hr />
          <p>OR Search results include X and Y</p>
          <hr />
          <p>NOT Search results include X but exclude results contain Y</p>
          <hr />
          <p>
            Sites: Filtered site search results Support for the darkweb
            surfaceweh website A site ; must be a full domain address (perfect
            match), for example Friday Intel NOT inurl:xxxxxxxxxxxxx.onion
          </p>
          <hr />
          <p>
            inurl: Search result in filtered URL Support for darkweb/surface URL
            URL should be match with specific pattern (Like match) e.g.Friday
            Intel NOT inurl http://xxxxxxxxx.com
          </p>
        </div>
      </div>
      <p>
        The purpose of indicator search is to extract information that is linked
        to the searched keyword. The keyword or source of the keyword could be
        used to generate a list of analysis results. The Monography of Friday
        Intel button displays a list of indicators that you can use. To search,
        click an indicator and enter an exact keyword for a perfect match.
      </p>
    </div>
  );
};

export default DrawerInfo;
