package edu.eci.invPrototype.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

/**
 * Created by alejandra on 02/04/17.
 */
@RestController
public class UsersController {
    @RequestMapping("/app/user")
    public Principal user(Principal user) {
        return user;
    }
}
