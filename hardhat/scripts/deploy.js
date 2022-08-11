// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require('hardhat')

async function main() {
  const ShowName = await hre.ethers.getContractFactory('ShowName')
  const showName = await ShowName.deploy()

  await showName.deployed()
  console.log('Contract deployed to:', showName.address)

  await showName.set('Dibass')
  // console.log('The name is:', await showName.get())
  console.log('The name is:', await showName.MyName())
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
