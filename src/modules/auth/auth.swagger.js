/**
 * @swagger
 * tags:
 *  name: auth
 *  description : auth module routes
 */

/**
 * @swagger
 * paths:
 *  /auth/send-otp:
 *      post:
 *          summary: send one time password
 *          description: takes a phone number and sends a OTP code to it
 *          parameters:
 *            - in: requestBody
 *              name : phone
 *              type : string
 *              required: true
 */
