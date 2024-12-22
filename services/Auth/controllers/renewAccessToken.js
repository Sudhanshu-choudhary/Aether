import jwt from 'jsonwebtoken'
import aetherError from '../../../shared/utils/aetherError.js'
import aetherResponse from '../../../shared/utils/aetherResponse.js'
import { getUserFromRefreshToken } from '../services/authService.js'

const renewAccessToken = async (req, res) => {
  try {
    const { refreshToken } = req.body

    if (!refreshToken) {
      throw new aetherError(400, 'Refresh token not found')
    }

    const user = await getUserFromRefreshToken(refreshToken);
    if (!user) throw new aetherError(401, 'Invalid or expired refresh token')

    const newAccessToken = jwt.sign(
      { _id: user._id },
      process.env.ACCESS_TOKEN,
      { expiresIn: process.env.ACCESS_TOKEN_EXPIRY }
    )

    res.status(200).json(new aetherResponse(200, { accessToken: newAccessToken }, 'Access token renewed successfully'))
  } catch (error) {
    res.status(err.code || 501).json(new aetherResponse.error(err.code, err.message))
  }
}

export default renewAccessToken