package com.dockerforjavadevelopers.hello;

import java.awt.print.Pageable;
import org.springframework.stereotype.Repository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import java.util.List;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.PagingAndSortingRepository;

@Repository
public interface ResponseRepository extends PagingAndSortingRepository<Response, Integer> {

    //public List<Response> findAll(Pageable pageable);
}