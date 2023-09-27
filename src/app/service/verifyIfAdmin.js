const userRepository = require('../repository/userRepository')
const BadRequest = require('../errors/badRequest')

async function verifyIfAdmin(idAdmin){
    if(!idAdmin) throw new BadRequest('You must use an admin Id')
    const result = await userRepository.getUserById(idAdmin)
    if(!result) throw new BadRequest('Id dont exist')
    if(result.role != 'manager')throw new BadRequest('You dont have permission.')
}

module.exports = verifyIfAdmin