package school.sptech.neosspringjava.api.configuration.security;

import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import school.sptech.neosspringjava.service.client.authentication.AuthenticationService;

public class AuthenticationProvider implements org.springframework.security.authentication.AuthenticationProvider {

    private final AuthenticationService clientAuthenticationService;
    private final PasswordEncoder passwordEncoder;

    public AuthenticationProvider(AuthenticationService clientAuthenticationService, PasswordEncoder passwordEncoder) {
        this.clientAuthenticationService = clientAuthenticationService;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public Authentication authenticate(Authentication authentication) throws AuthenticationException {
        final String username = authentication.getName();
        final String password = authentication.getCredentials().toString();

        UserDetails userDetails = this.clientAuthenticationService.loadUserByUsername(username);
        if (this.passwordEncoder.matches(password, userDetails.getPassword())){
        return new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
        }else{
            throw  new BadCredentialsException("Usuário ou senha inválidos");
        }
    }

    @Override
    public boolean supports(Class<?> authentication) {
        return authentication.equals(UsernamePasswordAuthenticationToken.class);
    }
}
