/**
 * Todo API
 * API documentation for Todo management
 *
 * OpenAPI spec version: 1.0.0
 * Contact: support@example.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
package io.swagger.client.models


/**
 * 
 * @param id 
 * @param title 
 * @param description 
 * @param createdAt 
 * @param updatedAt 
 */
data class Todo (

    val id: kotlin.Int? = null,
    val title: kotlin.String,
    val description: kotlin.String? = null,
    val createdAt: java.time.LocalDateTime? = null,
    val updatedAt: java.time.LocalDateTime? = null
) {
}