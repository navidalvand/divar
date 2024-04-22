/**
 * @swagger
 * tags:
 *  name: category
 *  description : category module routes
 */

/**
 * @swagger
 *  components:
 *      schemas:
 *          create-category:
 *              type: object
 *              properties:
 *                  name:
 *                      type: string
 *                      required: true
 *                      description: name of the category
 *                  slug:
 *                      type: string
 *                      description: idk
 *                  icon:
 *                      type: string
 *                      required: true
 *                      description: category icon
 *                  parent:
 *                      type: string
 *                      description: id of the parent category
 *              required:
 *                - name
 *                - icon
 */

/**
 * @swagger
 * paths:
 *  /category:
 *      post:
 *          summary: add a new category
 *          tags : [category]
 *          description: create a new category
 *          requestBody:
 *              description: Optional description in *Markdown*
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: "#/components/schemas/create-category"
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: "#/components/schemas/create-category"
 *          responses:
 *              200:
 *                  description: user profile
 */

/**
 * @swagger
 * paths:
 *  /category:
 *      get:
 *          summary: all categories
 *          tags : [category]
 *          description: get all categories
 *          responses:
 *              200:
 *                  description: user profile
 */
