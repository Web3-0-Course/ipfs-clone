const main = async () => {
  // get the contract
  const dstorage = await ethers.getContractFactory("DStorage");
  const dstorageContract = await dstorage.deploy();

  await dstorageContract.deployed();

  console.log(`Contract address is : ${dstorageContract.address}`);
}

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error){
    console.error(error);
  }
}

runMain();