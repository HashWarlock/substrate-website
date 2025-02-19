import { Link } from 'gatsby-plugin-substrate';
import React from 'react';

export default function ExploreCommunityProjects() {
  const links = [
    {
      name: 'Networks',
      items: [
        {
          name: 'Contracts Testnet',
          link: 'https://ink.substrate.io/testnet/',
          description: 'A smart contract testnet on Rococo.',
        },
        {
          name: 'Moonbeam',
          link: '/ecosystem/projects/case-studies/moonbeam/',
          description: 'An Ethereum-compatible smart contract parachain on Polkadot.',
        },
        {
          name: 'Astar',
          link: '/ecosystem/projects/case-studies/astar/',
          description: 'Astar Network is a scaling dapps platform on Polkadot.',
        },
      ],
    },
    {
      name: 'Tooling',
      items: [
        {
          name: 'cargo-contract',
          link: 'https://crates.io/crates/cargo-contract/0.8.0',
          description: 'CLI tool to setup and deploy ink! smart contracts.',
        },
        {
          name: 'Contracts UI',
          link: 'https://contracts-ui.substrate.io/',
          description: 'Deploy and interact with smart contracts on Substrate-based chains.',
        },
        {
          name: 'ink! Playground',
          link: 'https://ink-playground.substrate.io/',
          description: 'Prototype and share ink! smart contracts in-browser.',
        },
      ],
    },
    {
      name: 'Further Resources',
      items: [
        {
          name: 'ink! Documentation',
          link: 'https://ink.substrate.io/',
          description: 'Dive deep into the ink! smart contract language.',
        },
        {
          name: 'Solang Solidity Compiler',
          link: 'https://solang.readthedocs.io/en/latest/#',
          description: 'Write Solidity contracts.',
        },
        {
          name: 'Patract',
          link: 'https://patract.io/',
          description: 'Tools and products for Wasm smart contracts.',
        },
      ],
    },
  ];

  return (
    <>
      <h2 className="text-4xl font-extrabold mb-6">Explore Community Projects</h2>
      <p className="text-base mb-8">Browse through different networks, tooling and further resources.</p>
      <div className="md:flex xl:justify-between">
        {links.map((column, idx) => (
          <div key={idx} className="mb-14 flex-1">
            <h4 className="text-2xl font-extrabold mb-9">{column.name}</h4>
            <ul className="px-4 ml-0 lg:mr-10">
              {column.items.map((item, index) => (
                <Link key={index} to={item.link}>
                  <li>
                    <h5 className="font-bold mb-1 text-base">{item.name}</h5>
                    <p className="mb-6">{item.description}</p>
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}
