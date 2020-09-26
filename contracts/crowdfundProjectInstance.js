/* eslint-disable */
import web3 from './web3';

 const abi =[
	{
		"inputs": [
			{
				"internalType": "address payable",
				"name": "projectStarter",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "projectTitle",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "projectDesc",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "fundRaisingDeadline",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "goalAmount",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			}
		],
		"name": "CreatorPaid",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "contributor",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "currentTotal",
				"type": "uint256"
			}
		],
		"name": "FundingReceived",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "amountGoal",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "checkIfFundingCompleteOrExpired",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "completeAt",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "contribute",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "contributions",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "creator",
		"outputs": [
			{
				"internalType": "address payable",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "currentBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "description",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getDetails",
		"outputs": [
			{
				"internalType": "address payable",
				"name": "projectStarter",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "projectTitle",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "projectDesc",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "deadline",
				"type": "uint256"
			},
			{
				"internalType": "enum Project.State",
				"name": "currentState",
				"type": "uint8"
			},
			{
				"internalType": "uint256",
				"name": "currentAmount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "goalAmount",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getRefund",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "raiseBy",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "state",
		"outputs": [
			{
				"internalType": "enum Project.State",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "title",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
 
 



 // [
//   {
//     "constant": true,
//     "inputs": [],
//     "name": "creator",
//     "outputs": [
//       {
//         "name": "",
//         "type": "address"
//       }
//     ],
//     "payable": false,
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "constant": true,
//     "inputs": [],
//     "name": "amountGoal",
//     "outputs": [
//       {
//         "name": "",
//         "type": "uint256"
//       }
//     ],
//     "payable": false,
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "constant": true,
//     "inputs": [],
//     "name": "raiseBy",
//     "outputs": [
//       {
//         "name": "",
//         "type": "uint256"
//       }
//     ],
//     "payable": false,
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "constant": true,
//     "inputs": [
//       {
//         "name": "",
//         "type": "address"
//       }
//     ],
//     "name": "contributions",
//     "outputs": [
//       {
//         "name": "",
//         "type": "uint256"
//       }
//     ],
//     "payable": false,
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "constant": true,
//     "inputs": [],
//     "name": "title",
//     "outputs": [
//       {
//         "name": "",
//         "type": "string"
//       }
//     ],
//     "payable": false,
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "constant": true,
//     "inputs": [],
//     "name": "completeAt",
//     "outputs": [
//       {
//         "name": "",
//         "type": "uint256"
//       }
//     ],
//     "payable": false,
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "constant": true,
//     "inputs": [],
//     "name": "description",
//     "outputs": [
//       {
//         "name": "",
//         "type": "string"
//       }
//     ],
//     "payable": false,
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "constant": false,
//     "inputs": [],
//     "name": "checkIfFundingCompleteOrExpired",
//     "outputs": [],
//     "payable": false,
//     "stateMutability": "nonpayable",
//     "type": "function"
//   },
//   {
//     "constant": false,
//     "inputs": [],
//     "name": "getRefund",
//     "outputs": [
//       {
//         "name": "",
//         "type": "bool"
//       }
//     ],
//     "payable": false,
//     "stateMutability": "nonpayable",
//     "type": "function"
//   },
//   {
//     "constant": true,
//     "inputs": [],
//     "name": "state",
//     "outputs": [
//       {
//         "name": "",
//         "type": "uint8"
//       }
//     ],
//     "payable": false,
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "constant": false,
//     "inputs": [],
//     "name": "payOut",
//     "outputs": [
//       {
//         "name": "",
//         "type": "bool"
//       }
//     ],
//     "payable": false,
//     "stateMutability": "nonpayable",
//     "type": "function"
//   },
//   {
//     "constant": true,
//     "inputs": [],
//     "name": "currentBalance",
//     "outputs": [
//       {
//         "name": "",
//         "type": "uint256"
//       }
//     ],
//     "payable": false,
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "constant": false,
//     "inputs": [],
//     "name": "contribute",
//     "outputs": [],
//     "payable": true,
//     "stateMutability": "payable",
//     "type": "function"
//   },
//   {
//     "constant": true,
//     "inputs": [],
//     "name": "getDetails",
//     "outputs": [
//       {
//         "name": "projectStarter",
//         "type": "address"
//       },
//       {
//         "name": "projectTitle",
//         "type": "string"
//       },
//       {
//         "name": "projectDesc",
//         "type": "string"
//       },
//       {
//         "name": "deadline",
//         "type": "uint256"
//       },
//       {
//         "name": "currentState",
//         "type": "uint8"
//       },
//       {
//         "name": "currentAmount",
//         "type": "uint256"
//       },
//       {
//         "name": "goalAmount",
//         "type": "uint256"
//       }
//     ],
//     "payable": false,
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [
//       {
//         "name": "projectStarter",
//         "type": "address"
//       },
//       {
//         "name": "projectTitle",
//         "type": "string"
//       },
//       {
//         "name": "projectDesc",
//         "type": "string"
//       },
//       {
//         "name": "fundRaisingDeadline",
//         "type": "uint256"
//       },
//       {
//         "name": "goalAmount",
//         "type": "uint256"
//       }
//     ],
//     "payable": false,
//     "stateMutability": "nonpayable",
//     "type": "constructor"
//   },
//   {
//     "payable": true,
//     "stateMutability": "payable",
//     "type": "fallback"
//   },
//   {
//     "anonymous": false,
//     "inputs": [
//       {
//         "indexed": false,
//         "name": "contributor",
//         "type": "address"
//       },
//       {
//         "indexed": false,
//         "name": "amount",
//         "type": "uint256"
//       },
//       {
//         "indexed": false,
//         "name": "currentTotal",
//         "type": "uint256"
//       }
//     ],
//     "name": "FundingReceived",
//     "type": "event"
//   },
//   {
//     "anonymous": false,
//     "inputs": [
//       {
//         "indexed": false,
//         "name": "recipient",
//         "type": "address"
//       }
//     ],
//     "name": "CreatorPaid",
//     "type": "event"
//   }
// ];

export default (address) => {
  const instance = new web3.eth.Contract(abi, address);
  return instance;
};


