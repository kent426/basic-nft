// SPDX-License-Identifier: MIT
pragma solidity =0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

// import "@openzeppelin/contracts/token/ERC721/ERC721Mintable.sol";

contract BasicNFT is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    uint256 public totalSupply = 1000;

    event MintedBNFT(address to, string tokenuri);

    constructor() ERC721("BasicNFT", "BNFT") {}

    function mintBNFT(address recipient, string memory tokenuri)
        public
        returns (uint256)
    {
        require(balanceOf(msg.sender) == 0, "Can not mint more than one BNFT");

        _tokenIds.increment();
        uint256 currentItemId = _tokenIds.current();
        require(currentItemId < 1000);

        _safeMint(recipient, currentItemId);
        _setTokenURI(currentItemId, tokenuri);
        emit MintedBNFT(recipient, tokenuri);
        return currentItemId;
    }
}
