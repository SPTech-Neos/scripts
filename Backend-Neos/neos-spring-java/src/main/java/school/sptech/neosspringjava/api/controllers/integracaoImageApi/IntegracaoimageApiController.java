package school.sptech.neosspringjava.api.controllers.integracaoImageApi;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Collection;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;

import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import school.sptech.neosspringjava.config.IntegracaoimageApiConfig;
import school.sptech.neosspringjava.service.integracaoImageApi.IntegracaoImageApiService;
import school.sptech.neosspringjava.service.integracaoImageApi.IntegracaoImageApiService;

@Controller
@RequestMapping("/api/files")
@RequiredArgsConstructor
public class IntegracaoimageApiController {
   

    private final IntegracaoImageApiService integracaoImageApi;

    @PostMapping("/upload")
    public ResponseEntity<String> uploadFile(@RequestParam("file") MultipartFile file) {

       return ResponseEntity.ok(integracaoImageApi.uploadFile(file));
    }
}