/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.dockerforjavadevelopers.hello;


import javax.persistence.*;

/**
 *
 * @author Adriana Osmulska
 */
@Entity
public class Response {

    @GeneratedValue
    @Id
    private Long id;

    @Column
    private int inputedValue;

    @Column
    private Long result;


    public Response() {
    }

    public Response(Long id, int inputedValue, Long result) {
        this.id = id;
        this.inputedValue = inputedValue;
        this.result = result;
    }
    
}
