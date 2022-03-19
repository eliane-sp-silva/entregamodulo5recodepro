package silva.eliane.dreamsspringsecurity.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;

import silva.eliane.dreamsspringsecurity.services.DreamsUserService;

@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter{
	
	@Autowired
	private DreamsUserService service;

	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		PasswordEncoder passwordEncoder = PasswordEncoderFactories.createDelegatingPasswordEncoder();
		auth.inMemoryAuthentication()
		.withUser("eliane")
		.password(passwordEncoder.encode("teste"))
		.roles("ADMIN" , "USER")
		.and()
		.withUser("caio")
		.password(passwordEncoder.encode("123"))
		.roles("USER")
		;
		
		auth.userDetailsService(service).passwordEncoder(passwordEncoder);
	}
		
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http
		.csrf()
		.disable()
		.authorizeRequests()
		.antMatchers("/pessoa/admin/**").hasRole("ADMIN")
		.antMatchers("/pessoa/**").hasRole("USER")
		.anyRequest()
		.authenticated()
		.and()
		.formLogin()
		.and()
		.httpBasic();
	}
	


}
