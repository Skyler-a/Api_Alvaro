const userRepository = require('../repository/userRepository')

async function verifyIfAdmin(idAdmin){
    console.log(idAdmin)
    const result = await userRepository.getUserById(idAdmin)
    if(result.role != 'manager')throw new Error('Your dumb ass bitch, youre not even an admin, why are you trying this shit?')
}

module.exports = verifyIfAdmin