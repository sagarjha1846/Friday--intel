import React, {  useRef, useState } from 'react';
import { useNodesState } from 'reactflow';
import"../css/DrawerInfo.css"
// import {AiOutlineCloseCircle} from "react-icons/ai";
import fridaySearch from '../images/svg/search-logo.svg';
const DrawerInfo = () => {
  // const [isshowDiv, setIsshowDiv] = useState(true);

  // const handleClose = () => {
  //     setIsshowDiv(false);
  // };
  const searchRef = useRef();
  const [setNodes] = useNodesState([]);
  const [search, setSearch] = useState('');

  return (
    <span className="help">
      <div className="help2">
        {/* <button onClick={handleClose} className="close-btn"> */}
        {/* <AiOutlineCloseCircle/>
                      </button> */}
        <h2>Search Guidelines</h2>
        <hr />
        <h4>Keyword Search</h4>
        <p>
          Friday Intel offers full-text search and retrieves recent darkweb{' '}
          <br /> content that includes the search keyword.
        </p>
        <p>Just as search engines, put Keybord to search</p>
        <br />
        <div className="searchbar-box-help">
            <img src={fridaySearch} alt="star" className="searchbar-logo" />
            <input
              type="text"
              className="search-bar-NC"
              onKeyUp={(e) => {
                searchRef.current = e.target.value;
                if (e.code === 'Enter') {
                  setNodes((prev) => [
                    ...prev,
                    {
                      id: e.target.value,
                      type: 'custom',
                      data: { label: e.target.value },
                      position: { x: 250, y: 0 },
                    },
                  ]);
                  setSearch('');
                }
              }}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Type something......"
              value={search}
            />
          </div>
        <p>
          If there are too many results to study, try a more specific keyword
          search to get more relevant results. To find more specific results,
          use the search operator.
        </p>
        <p>Just as search engines, put Keybord to search</p>
        <h1>Search Operator</h1>
        <p>
          Search operators are special commands that enable advanced full text
        </p>
        <div className='parent'>
          <div className='div1'>
            <h4>Operator</h4>
            <hr />
            <h4>""</h4>
            <br />
            <hr />
            <h4>AND</h4>
            <hr />
            <h4>OR</h4>
            <hr />
            <h4>NOT</h4>
            <br />
            <hr />
            <h4>sites:</h4>
            <br />
            <br />
            <br />
            <br />
            <br />
            <hr />
            <h4>inurl:</h4>
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
          <div className='div2'>
            <h4>Description</h4>
            <hr />
            <p>The search results are exact matches <br /> to the keywords in “ ”</p>
            <hr />
            <p>Search results include both X and Y</p>
            <hr />
            <p>Search results include X and Y</p>
            <hr />
            <p>Search results include X but exclude <br /> results contain Y</p>
            <hr />
            <p>Filtered site search results
                  <li>
                   Support for the darkweb/ <br />
                   surfaceweb website
                    </li>
<li> A site must be a full domain address <br />
(perfect match), for example Friday <br />
Intel AND site:xxxxxxxxxxxxx.onion
</li>
<hr />
</p>
            <p>Search result in filtered URL
              <li>
              Support for darkweb / surfaceweb <br />
URL
              </li>
              <li>
              URL should be match with specific <br />
pattern (Like match) e.g. Friday Intel <br />
NOT inurl:http ://xxxxxxxxx.com

              </li>
            </p>
          </div>
        </div>
        <h4>Indicator Search</h4>
        <p>
          The purpose of indicator search is to extract information that is
          linked to the searched keyword. The keyword or source of the keyword
          could be used to generate a list of analysis results. The Monography
          of Friday Intel button displays a list of indicators that you can use.
          To search, click an indicator and enter an exact keyword for a perfect
          match.
        </p>
        <p>Indicator Remarks:</p>
       <div className='parent2'>
        <div className='div11'>
<h4>Indicator</h4>
<hr />
<h4>tor/i2p:</h4>
<br />
<br />
<hr />
<h4>torurl/i2purl </h4>
<br />
<br />
<hr />
<h4>domain:</h4>
<br />
<hr />
<h4>hash: </h4>
        </div>
        <div className='div22'>
        <h4>Remarks</h4>
        <hr />
        <p>Retrieves all information obtained <br />
from a dark web site and can perform <br />
total domain analysis.</p>
<hr />
<p>Retrieves all information obtained <br />
from a dark web URL and performs a <br />
total analysis on the searched URL.</p>
<hr />
<p>It is useful for tracking any mentions <br />
of a searched site on the dark web.</p>
<hr />
<p>Uses md5/sha1/sha2 to retrieve any <br />
files.</p>
        </div>
       </div>
        
      </div>
    </span>
  );
};

export default DrawerInfo;
