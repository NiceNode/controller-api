export default [
  {
    specId: 'ethereum',
    version: '1.0.0',
    displayName: 'Ethereum',
    displayTagline: 'Non-Validating Node - Ethereum',
    execution: {
      executionTypes: ['nodePackage'],
      defaultExecutionType: 'nodePackage',
      services: [
        {
          serviceId: 'executionClient',
          name: 'Execution Client',
          nodeOptions: ['nethermind', 'besu', 'geth', 'reth', 'erigon'],
          required: true,
          requiresCommonJwtSecret: true,
        },
        {
          serviceId: 'consensusClient',
          name: 'Consensus Client',
          nodeOptions: [
            'lodestar-beacon',
            'teku-beacon',
            'prysm-beacon',
            'lighthouse-beacon',
            'nimbus-beacon',
          ],
          required: true,
          requiresCommonJwtSecret: true,
        },
      ],
    },
    category: 'L1',
    rpcTranslation: 'eth-l1',
    systemRequirements: {
      documentationUrl: 'https://geth.ethereum.org/docs/interface/hardware',
      cpu: {
        cores: 4,
      },
      memory: {
        minSizeGBs: 16,
      },
      storage: {
        minSizeGBs: 1600,
        ssdRequired: true,
      },
      internet: {
        minDownloadSpeedMbps: 25,
        minUploadSpeedMbps: 10,
      },
      docker: {
        required: true,
      },
    },
    configTranslation: {
      dataDir: {
        displayName: 'Data location',
        cliConfigPrefix: '--datadir ',
        defaultValue: '~/.ethereum',
        uiControl: {
          type: 'filePath',
          serviceConfigs: {
            services: [
              {
                serviceId: 'executionClient',
                configKey: 'dataDir',
              },
              {
                serviceId: 'consensusClient',
                configKey: 'dataDir',
              },
            ],
          },
        },
        infoDescription:
          'Data directory for the databases and keystore (default: "~/.ethereum")',
      },
      network: {
        displayName: 'Network',
        addNodeFlow: 'required',
        defaultValue: 'Mainnet',
        uiControl: {
          type: 'select/single',
          controlTranslations: [
            {
              value: 'Mainnet',
              config: 'unused in nodespec',
              serviceConfigs: {
                services: [
                  {
                    serviceId: 'executionClient',
                    configValues: {
                      network: 'Mainnet',
                    },
                  },
                  {
                    serviceId: 'consensusClient',
                    configValues: {
                      network: 'Mainnet',
                    },
                  },
                ],
              },
            },
            {
              value: 'Sepolia',
              config: 'unused in nodespec',
              serviceConfigs: {
                services: [
                  {
                    serviceId: 'executionClient',
                    configValues: {
                      network: 'Sepolia',
                    },
                  },
                  {
                    serviceId: 'consensusClient',
                    configValues: {
                      network: 'Sepolia',
                    },
                  },
                ],
              },
            },
            {
              value: 'Holesky',
              config: 'unused in nodespec',
              serviceConfigs: {
                services: [
                  {
                    serviceId: 'executionClient',
                    configValues: {
                      network: 'Holesky',
                    },
                  },
                  {
                    serviceId: 'consensusClient',
                    configValues: {
                      network: 'Holesky',
                    },
                  },
                ],
              },
            },
          ],
        },
        documentation:
          'https://ethereum.org/en/developers/docs/networks/#public-networks',
      },
    },
    iconUrl: 'https://ethereum.png',
    addNodeDescription:
      'Running a full etherum node is a two part story. Choosing minority clients are important for the health of the network.',
    description:
      "An Ethereum node holds a copy of the Ethereum blockchain and verifies the validity of every block, keeps it up-to-date with new blocks and thelps others to download and update their own copies of the chain. In the case of Ethereum a node consists of two parts: the execution client and the consensus client. These two clients work together to verify Ethereum's state. The execution client listens to new transactions broadcasted in the network, executes them in EVM, and holds the latest state and database of all current Ethereum data. The consensus client runs the Proof-of-Stake consensus algorithm, which enables the network to achieve agreement based on validated data from the execution client.  A non-validating node does not get financial rewards but there are many benefits of running a node for any Ethereum user to consider, including privacy, security, reduced reliance on third-party servers, censorship resistance and improved health and decentralization of the network.",
    resources: [
      {
        label: 'Run your own node',
        value: 'ethereum.org',
        link: 'https://ethereum.org',
      },
      {
        label: 'Learn about client diversity',
        value: 'ethereum.org',
        link: 'https://ethereum.org/en/developers/docs/nodes-and-clients/client-diversity/',
      },
    ],
  },
  {
    specId: 'optimism',
    version: '1.0.0',
    displayName: 'Optimism',
    displayTagline: 'Ethereum L2 - Optimism',
    execution: {
      executionTypes: ['nodePackage'],
      services: [
        {
          serviceId: 'executionClient',
          name: 'Execution Client',
          nodeOptions: ['op-geth', 'nethermind'],
          required: true,
          requiresCommonJwtSecret: true,
        },
        {
          serviceId: 'consensusClient',
          name: 'Consensus Client',
          nodeOptions: ['op-node', 'magi', 'hildr'],
          required: true,
          requiresCommonJwtSecret: true,
        },
      ],
      dependencies: [
        {
          name: 'Ethereum node',
          specId: 'ethereum',
        },
      ],
    },
    category: 'Ethereum/L2',
    rpcTranslation: 'eth-l2-op-stack',
    systemRequirements: {
      documentationUrl: 'https://geth.ethereum.org/docs/interface/hardware',
      cpu: {
        cores: 4,
      },
      memory: {
        minSizeGBs: 16,
      },
      storage: {
        minSizeGBs: 200,
        ssdRequired: true,
      },
      internet: {
        minDownloadSpeedMbps: 25,
        minUploadSpeedMbps: 10,
      },
    },
    configTranslation: {
      network: {
        displayName: 'Network',
        defaultValue: 'Mainnet',
        addNodeFlow: 'required',
        uiControl: {
          type: 'select/single',
          controlTranslations: [
            {
              value: 'Mainnet',
              config: 'unused in nodespec',
              serviceConfigs: {
                services: [
                  {
                    serviceId: 'executionClient',
                    configValues: {
                      genesisFile: 'genesis-l2.json',
                      rollupSequencerHttpEndpoint:
                        'https://sequencer.optimism.io/',
                      chainId: '10',
                      enginePort: '8553',
                    },
                  },
                  {
                    serviceId: 'consensusClient',
                    configValues: {
                      network: 'Mainnet',
                      chainId: '10',
                    },
                  },
                ],
              },
            },
            {
              value: 'Sepolia',
              config: 'unused in nodespec',
              serviceConfigs: {
                services: [
                  {
                    serviceId: 'executionClient',
                    configValues: {
                      genesisFile: 'sepolia-genesis-l2.json',
                      rollupSequencerHttpEndpoint:
                        'https://sepolia-sequencer.optimism.io/',
                      chainId: '11155420',
                      enginePort: '8553',
                    },
                  },
                  {
                    serviceId: 'consensusClient',
                    configValues: {
                      network: 'Sepolia',
                      chainId: '11155420',
                    },
                  },
                ],
              },
            },
          ],
        },
        infoDescription: 'Mainnet support coming soon',
      },
    },
    iconUrl: 'https://ethereum.png',
    addNodeDescription:
      'OP Mainnet is a fast, stable, and scalable L2 blockchain built by Ethereum developers, for Ethereum developers.',
    description:
      "Optimism is a secure, low-cost, developer-friendly Ethereum L2 built to bring the next billion users onchain. It's built on Optimism’s open-source OP Stack.",
    documentation: {
      default: 'https://docs.optimism.org/guides/run-a-optimism-node/',
    },
  },
  {
    specId: 'arbitrum',
    version: '1.0.0',
    displayName: 'Arbitrum One',
    displayTagline: 'Non-Validating Node',
    execution: {
      executionTypes: ['nodePackage'],
      defaultExecutionType: 'nodePackage',
      services: [
        {
          serviceId: 'executionClient',
          name: 'Execution Client',
          nodeOptions: ['nitro'],
          required: true,
        },
      ],
    },
    category: 'Ethereum/L2',
    rpcTranslation: 'eth-l1',
    systemRequirements: {
      documentationUrl: 'https://geth.arbitrum.org/docs/interface/hardware',
      cpu: {
        cores: 4,
      },
      memory: {
        minSizeGBs: 8,
      },
      storage: {
        minSizeGBs: 1600,
        ssdRequired: true,
      },
      internet: {
        minDownloadSpeedMbps: 25,
        minUploadSpeedMbps: 10,
      },
      docker: {
        required: true,
      },
    },
    configTranslation: {
      dataDir: {
        displayName: 'Data location',
        cliConfigPrefix: '--datadir ',
        defaultValue: '~/.ethereum',
        uiControl: {
          type: 'filePath',
        },
        infoDescription:
          'Data directory for the databases and keystore (default: "~/.ethereum")',
      },
      network: {
        displayName: 'Network',
        uiControl: {
          type: 'select/single',
          controlTranslations: [
            {
              value: 'Mainnet',
              config: '--network mainnet',
            },
          ],
        },
        defaultValue: 'Disabled',
        documentation: 'https://geth.ethereum.org/docs/rpc/server',
      },
    },
    addNodeDescription:
      'Designed with you in mind, Arbitrum is the leading Layer 2 technology that empowers you to explore and build in the largest Layer 1 ecosystem, Ethereum.',
    description:
      'Designed with you in mind, Arbitrum is the leading Layer 2 technology that empowers you to explore and build in the largest Layer 1 ecosystem, Ethereum.  Take it to the next layer with Nitro. Making Ethereum more inclusive and sustainable, Nitro is the most advanced blockchain scaling technology in the industry.',
  },
  {
    specId: 'base',
    version: '1.0.0',
    displayName: 'Base',
    execution: {
      executionTypes: ['nodePackage'],
      services: [
        {
          serviceId: 'executionClient',
          name: 'Execution Client',
          nodeOptions: ['op-geth', 'nethermind'],
          required: true,
          requiresCommonJwtSecret: true,
        },
        {
          serviceId: 'consensusClient',
          name: 'Consensus Client',
          nodeOptions: ['op-node', 'magi', 'hildr'],
          required: true,
          requiresCommonJwtSecret: true,
        },
      ],
      dependencies: [
        {
          name: 'Ethereum node',
          specId: 'ethereum',
        },
      ],
    },
    category: 'Ethereum/L2',
    rpcTranslation: 'eth-l2-op-stack',
    systemRequirements: {
      documentationUrl: 'https://geth.ethereum.org/docs/interface/hardware',
      cpu: {
        cores: 4,
      },
      memory: {
        minSizeGBs: 16,
      },
      storage: {
        minSizeGBs: 200,
        ssdRequired: true,
      },
      internet: {
        minDownloadSpeedMbps: 25,
        minUploadSpeedMbps: 10,
      },
    },
    configTranslation: {
      network: {
        displayName: 'Network',
        defaultValue: 'Mainnet',
        addNodeFlow: 'required',
        uiControl: {
          type: 'select/single',
          controlTranslations: [
            {
              value: 'Mainnet',
              config: 'unused in nodespec',
              serviceConfigs: {
                services: [
                  {
                    serviceId: 'executionClient',
                    configValues: {
                      genesisFile: 'genesis-l2.json',
                      rollupSequencerHttpEndpoint:
                        'https://mainnet-sequencer.base.org',
                      chainId: '8453',
                      enginePort: '8553',
                    },
                  },
                  {
                    serviceId: 'consensusClient',
                    configValues: {
                      network: 'Mainnet',
                      chainId: '8453',
                    },
                  },
                ],
              },
            },
            {
              value: 'Sepolia',
              config: 'unused in nodespec',
              serviceConfigs: {
                services: [
                  {
                    serviceId: 'executionClient',
                    configValues: {
                      genesisFile: 'sepolia-genesis-l2.json',
                      rollupSequencerHttpEndpoint:
                        'https://sepolia-sequencer.base.org/',
                      chainId: '84532',
                      enginePort: '8553',
                    },
                  },
                  {
                    serviceId: 'consensusClient',
                    configValues: {
                      network: 'Sepolia',
                      chainId: '84532',
                    },
                  },
                ],
              },
            },
          ],
        },
        documentation: 'https://docs.base.org/network-information/',
      },
    },
    iconUrl: 'https://ethereum.png',
    addNodeDescription:
      'Decentralization and collaboration are critical for the longer-term success of Base and scaling Ethereum. That’s why we are working with OP Labs and the Optimism Collective on a plan to scale Ethereum in a decentralized way.',
    description:
      "Base is a secure, low-cost, developer-friendly Ethereum L2 built to bring the next billion users onchain. It's built on Optimism’s open-source OP Stack.",
    documentation: {
      default: 'https://docs.base.org/guides/run-a-base-node/',
    },
  },
  {
    specId: 'farcaster',
    version: '1.0.0',
    displayName: 'Farcaster',
    displayTagline: 'Sync the entire Farcaster network',
    execution: {
      executionTypes: ['nodePackage'],
      defaultExecutionType: 'nodePackage',
      services: [
        {
          serviceId: 'hub',
          name: 'Farcaster Hub',
          nodeOptions: ['hubble'],
          required: true,
          requiresCommonJwtSecret: true,
        },
      ],
      dependencies: [
        {
          name: 'Ethereum node',
          specId: 'ethereum',
        },
        {
          name: 'Optimism node',
          specId: 'optimism',
        },
      ],
    },
    category: 'L1',
    rpcTranslation: 'farcaster-l1',
    systemRequirements: {
      documentationUrl:
        'https://www.thehubble.xyz/intro/install.html#requirements',
      cpu: {
        cores: 2,
      },
      memory: {
        minSizeGBs: 8,
      },
      storage: {
        minSizeGBs: 20,
        ssdRequired: true,
      },
      docker: {
        required: true,
      },
    },
    configTranslation: {
      dataDir: {
        displayName: 'Data location',
        cliConfigPrefix: '--datadir ',
        defaultValue: '~/.farcaster',
        uiControl: {
          type: 'filePath',
        },
        infoDescription:
          'Data directory for the databases and keystore (default: "~/.farcaster")',
      },
    },
    iconUrl: 'https://farcaster.png',
    addNodeDescription:
      'Farcaster is a decentralized social network, as an open protocol that can support many clients, just like email. Hubs validate, storage and replicate account messages to other hubs. Running a hub requires a connection to an Ethereum and Optimism mainnet RPC endpoint.',
    description:
      'Hubble creates a private instance of the Farcaster network on your machine. It stores a copy of every message from every user and syncs with other hubs to stay up to date. Messages uploaded to Hubble will be broadcast to other Hubs.',
  },
  {
    specId: 'home-assistant',
    version: '1.0.0',
    displayName: 'Home Assistant',
    displayTagline:
      'Local Home Assistant server. [Note] NOT AFFLIATED with Home Assistant or NabuCasa!',
    execution: {
      executionTypes: ['nodePackage'],
      defaultExecutionType: 'nodePackage',
      services: [
        {
          serviceId: 'homeAssistantService',
          name: 'Home Assistant Service',
          nodeOptions: ['home-assistant-service'],
          required: true,
        },
      ],
    },
    category: 'utility/automation',
    rpcTranslation: 'home-assistant',
    systemRequirements: {
      documentationUrl: 'https://www.home-assistant.io/installation/',
      cpu: {
        cores: 1,
      },
      memory: {
        minSizeGBs: 2,
      },
      storage: {
        minSizeGBs: 4,
      },
      docker: {
        required: true,
      },
    },
    configTranslation: {
      dataDir: {
        displayName: 'Data location',
        uiControl: {
          type: 'filePath',
          serviceConfigs: {
            services: [
              {
                serviceId: 'homeAssistantServer',
                configKey: 'dataDir',
              },
            ],
          },
        },
        infoDescription:
          'Data directory for the assistant config (default: "/config")',
      },
    },
    iconUrl:
      'https://raw.githubusercontent.com/home-assistant/home-assistant.io/current/source/images/favicon-192x192.png',
    description:
      "[Note] This is NOT AFFLIATED in any way with the official Home Assistant or NabuCasa organizations! This offering is open-source, free, and not guarenteed any support by us. Please read our terms and privacy policies on https://nicenode.xyz for more information. To play on this server on the same computer that it is being run, add 'localhost' for the multiplayer server. To add this server on a different computer and on the same network, add your computer's local IP address to the multiplayer server.",
    addNodeDescription:
      'Open source home automation that puts local control and privacy first. Powered by a worldwide community of tinkerers and DIY enthusiasts. Perfect to run on a Raspberry Pi or a local server. [Note] This is NOT AFFLIATED in any way with the official Home Assistant or NabuCasa organizations!',
    resources: [
      {
        label: 'Website',
        value: 'home-assistant.io',
        link: 'https://www.home-assistant.io',
      },
      {
        label: 'Privacy Policy',
        value: 'home-assistant.io/privacy',
        link: 'https://www.home-assistant.io/privacy',
      },
      {
        label: 'Security Vulnerabilities and Reporting',
        value: 'home-assistant.io/security',
        link: 'https://www.home-assistant.io/security',
      },
    ],
  },
  {
    specId: 'minecraft',
    version: '1.0.0',
    displayName: 'Minecraft Server',
    displayTagline:
      "Local Minecraft server at 'localhost'. [Note] NOT AFFLIATED with Mojang or Microsoft!",
    execution: {
      executionTypes: ['nodePackage'],
      defaultExecutionType: 'nodePackage',
      services: [
        {
          serviceId: 'minecraftServer',
          name: 'Minecraft Server',
          nodeOptions: ['itzg-minecraft'],
          required: true,
        },
      ],
    },
    category: 'gaming/minecraft-server',
    rpcTranslation: 'minecraft-server',
    systemRequirements: {
      documentationUrl: 'https://minecraft.wiki/w/Server/Requirements',
      cpu: {
        cores: 1,
      },
      memory: {
        minSizeGBs: 2,
      },
      storage: {
        minSizeGBs: 2,
      },
      docker: {
        required: true,
      },
    },
    configTranslation: {
      dataDir: {
        displayName: 'Data location',
        uiControl: {
          type: 'filePath',
          serviceConfigs: {
            services: [
              {
                serviceId: 'minecraftServer',
                configKey: 'dataDir',
              },
            ],
          },
        },
        infoDescription:
          'Data directory for the databases and keystore (default: "~/.minecraft")',
      },
    },
    iconUrl:
      'https://www.minecraft.net/content/dam/games/minecraft/logos/logo-minecraft.svg',
    description:
      "[Note] This is NOT AFFLIATED in any way with the official Minecraft, Mojang, or Microsoft organizations! This offering is open-source, free, and not guarenteed any support by us. Please read our terms and privacy policies on https://nicenode.xyz for more information. To play on this server on the same computer that it is being run, add 'localhost' for the multiplayer server. To add this server on a different computer and on the same network, add your computer's local IP address to the multiplayer server.",
    addNodeDescription:
      'Want to set up a multiplayer server? Run a Minecraft multiplayer server by yourself. [Note] This is NOT AFFLIATED in any way with the official Minecraft, Mojang, or Microsoft organizations!',
    resources: [
      {
        label: 'Website',
        value: 'minecraft.net',
        link: 'https://www.minecraft.net/en-us/download/server',
      },
      {
        label: 'EULA (Terms of Use)',
        value: 'minecraft.net/eula',
        link: 'https://www.minecraft.net/en-us/eula',
      },
      {
        label: 'Privacy Policy',
        value: 'privacy.microsoft.com',
        link: 'https://privacy.microsoft.com/en-us/privacystatement',
      },
    ],
  },
];
