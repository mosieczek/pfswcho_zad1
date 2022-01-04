/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.dockerforjavadevelopers.hello;

import com.fasterxml.jackson.annotation.JsonView;

/**
 *
 * @author Adriana Osmulska
 */
public class Response {
    @JsonView
    private String value;

    public Response() {
    }

    public Response(String value) {
        this.value = value;
    }
    
}
