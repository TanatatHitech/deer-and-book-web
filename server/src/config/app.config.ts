export default (): any => ({
	growUpMembershipPackages: JSON.parse(process.env.GROWUP_MEMBERSHIP_PACKAGE ?? '[]') || [],
	growUpGasPackage: JSON.parse(process.env.GROWUP_GAS_PACKAGE ?? '[]') || [],
})
