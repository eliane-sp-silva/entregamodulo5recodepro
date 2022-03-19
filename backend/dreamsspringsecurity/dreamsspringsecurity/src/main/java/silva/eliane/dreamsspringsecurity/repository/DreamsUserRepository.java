package silva.eliane.dreamsspringsecurity.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import silva.eliane.dreamsspringsecurity.model.DreamsUser;

@Repository
public interface DreamsUserRepository extends JpaRepository<DreamsUser, Long>{
	
	DreamsUser findByUsername(String username);
	
}