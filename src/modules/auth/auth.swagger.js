/**
 * @swagger
 * tags:
 *  name: auth
 *  description : auth module routes
 */

/**
 * @swagger
 * components:
 *  schemas:
 *      send-otp:
 *          type: object
 *          properties:
 *              phone:
 *                  type: string
 *                  required: true
 *                  description: users phone number
 *          required:
 *            - phone
 *      check-otp:
 *          type: object
 *          properties:
 *              phone:
 *                  type: string
 *                  required: true
 *                  description: users phone number
 *              code:
 *                  type: number
 *                  required : true
 *                  description: one time password
 *          required:
 *            - phone
 *            - code
 */

/**
 * @swagger
 * paths:
 *  /auth/send-otp:
 *      post:
 *          summary: send one time password
 *          tags : [auth]
 *          description: takes a phone number and sends a OTP code to it
 *          requestBody:
 *              description: Optional description in *Markdown*
 *              required: true
 *              content:
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: "#/components/schemas/send-otp"
 *                  application/json:
 *                      schema:
 *                          $ref: "#/components/schemas/send-otp"
 *          responses:
 *              200:
 *                  description: success
 */

/**
 * @swagger
 * paths:
 *  /auth/check-otp:
 *      post:
 *          summary: send one time password
 *          tags : [auth]
 *          description: takes a phone number and sends a OTP code to it
 *          requestBody:
 *              description: Optional description in *Markdown*
 *              required: true
 *              content:
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: "#/components/schemas/check-otp"
 *                  application/json:
 *                      schema:
 *                          $ref: "#/components/schemas/check-otp"
 *          responses:
 *              200:
 *                  description: success
 */
