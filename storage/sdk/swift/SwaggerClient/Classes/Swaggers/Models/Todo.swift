//
// Todo.swift
//
// Generated by swagger-codegen
// https://github.com/swagger-api/swagger-codegen
//

import Foundation



public struct Todo: Codable {

    public var _id: Int?
    public var title: String
    public var _description: String?
    public var createdAt: Date?
    public var updatedAt: Date?

    public init(_id: Int? = nil, title: String, _description: String? = nil, createdAt: Date? = nil, updatedAt: Date? = nil) {
        self._id = _id
        self.title = title
        self._description = _description
        self.createdAt = createdAt
        self.updatedAt = updatedAt
    }

    public enum CodingKeys: String, CodingKey { 
        case _id = "id"
        case title
        case _description = "description"
        case createdAt = "created_at"
        case updatedAt = "updated_at"
    }

}
