const { prisma } = require('../config/prisma');

async function createdContactUs(contactUs) {
    try {
        const createdContactUs = await prisma.contactUs.create({
          data: {
            nama: contactUs.nama,
            email: contactUs.email,
            nomorHp: contactUs.nomorHp,
            pesan: contactUs.pesan
          }
        })
        return createdContactUs;
      } catch (error) {
        throw new Error(error)
      }
}

module.exports = {
  createdContactUs,
};