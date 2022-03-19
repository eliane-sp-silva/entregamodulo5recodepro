package silva.eliane.dreamsspringsecurity.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import silva.eliane.dreamsspringsecurity.repository.DreamsUserRepository;

@Service
public class DreamsUserService implements UserDetailsService{

	@Autowired
	private DreamsUserRepository dreamsUserRepository;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		// TODO Auto-generated method stub
		return Optional.ofNullable(dreamsUserRepository.findByUsername(username))
				.orElseThrow(() -> new UsernameNotFoundException("Usuario nao encontrado"));
	}

}
