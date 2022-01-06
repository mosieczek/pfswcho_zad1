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
    private int id;

    @Column
    private int inputedValue;
    
    @Column
    private int result;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getInputedValue() {
        return inputedValue;
    }

    public void setInputedValue(int inputedValue) {
        this.inputedValue = inputedValue;
    }

    public int getResult() {
        return result;
    }

    public void setResult(int result) {
        this.result = result;
    }




    public Response() {
    }

    public Response(int inputedValue, int result) {
        this.inputedValue = inputedValue;
        this.result = result;
    }
    
}
