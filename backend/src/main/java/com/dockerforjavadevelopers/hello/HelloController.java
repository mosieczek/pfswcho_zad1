package com.dockerforjavadevelopers.hello;


import java.awt.print.Pageable;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/fib")
@RestController
public class HelloController {
    @Autowired
    private ResponseRepository repository;
    @RequestMapping("/")
    public String index() {
        return "Hello\n";
    }
    
    @PostMapping("/oblicz/{value}")
    public Map<String, String> AddResult(@PathVariable int value){
        int result = 0;
        String response = "";
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
        
            Response responseEnt = new Response(value, result);
            repository.save(responseEnt);
        }else{
            response= "Podano zla wartosc K";
        }
        
        response = Integer.toString(result);
        HashMap<String, String> map = new HashMap<>();
        map.put("val", response);
        return map;
    }
    
    @GetMapping("/history")
    public Iterable<Response> GetList(){

        //Pageable pageable = (Pageable) PageRequest.of(0, 10, Sort.by("id").descending());
        Iterable<Response> responseList = repository.findAll(PageRequest.of(0, 10, Sort.by("id").descending()));
        return responseList;
    }
    
}
