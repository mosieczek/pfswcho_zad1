package com.dockerforjavadevelopers.hello;


import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/fib")
@RestController
public class HelloController {
    
    @RequestMapping("/")
    public String index() {
        return "Hello\n";
    }

    @GetMapping("/oblicz/{value}")
    public String calc(@PathVariable int value) {
        int result = 0;
        String response;
        if(value > 0 && value <= 20){
            result = 0;
            if(value == 1 || value == 2){
            result = 1;
            }
            else{
            int firstVal = 1;
            int secondVal = 1;
            int tempRes;
            for(int i = 2; i < value; i++){
                tempRes = firstVal + secondVal;
                firstVal = secondVal;
                secondVal = tempRes;
                result = tempRes;
            }
            }
        }else{
            response= "Podano zla wartosc K";
        }
        response = Integer.toString(result);
        Response res = new Response(response);
        return res;
    }
    
}
