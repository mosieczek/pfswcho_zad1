package com.dockerforjavadevelopers.hello;

import org.springframework.stereotype.Repository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

@Repository
public interface ResponseRepository extends CrudRepository<Response, Long> {
    
}