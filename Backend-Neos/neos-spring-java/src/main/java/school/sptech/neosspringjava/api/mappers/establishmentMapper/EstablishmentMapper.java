package school.sptech.neosspringjava.api.mappers.establishmentMapper;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import school.sptech.neosspringjava.api.dtos.establishmentDTO.EstablishmentRespose;
import school.sptech.neosspringjava.domain.model.establishment.Establishment;
import school.sptech.neosspringjava.domain.model.filter.Filter;
import school.sptech.neosspringjava.domain.model.service.Service;

@Component
public class EstablishmentMapper {

    public static EstablishmentRespose toEstablishmentResponse(Establishment establishment) {
        if (establishment == null) return null;

        EstablishmentRespose establishmentRespose = new EstablishmentRespose();

        establishmentRespose.setId(establishment.getId());
        establishmentRespose.setName(establishment.getName());
        establishmentRespose.setStartShift(establishment.getStartShift());
        establishmentRespose.setEndShift(establishment.getEndShift());
        establishmentRespose.setAssessment(establishment.getAssessment());
        establishmentRespose.setLocal(establishment.getLocal());
        establishmentRespose.setDescription(establishment.getDescription());

        establishmentRespose.setServices(toServiceDto(establishment.getServices()));
        establishmentRespose.setFilters(toFilterDto(establishment.getFilters()));

        return establishmentRespose;
    }

    private static List<EstablishmentRespose.FilterDto> toFilterDto(final List<Filter> entities) {
        if (entities == null) {
            return Collections.emptyList();
        }

        return entities.stream().map(f -> {
            final EstablishmentRespose.FilterDto dto = new EstablishmentRespose.FilterDto();
            dto.setId(f.getId());
            dto.setPrice(f.getPrice());
            dto.setService(f.getService());
            return dto;
        }).toList();
    }

    private static List<EstablishmentRespose.ServiceDto> toServiceDto(final List<Service> entities) {
        if (entities == null) {
            return Collections.emptyList();
        }

        return entities.stream().map(s -> {
            final EstablishmentRespose.ServiceDto dto = new EstablishmentRespose.ServiceDto();
            dto.setId(s.getId());
            dto.setSpecification(s.getSpecification());
            dto.setServiceType(s.getServiceType());
            return dto;
        }).toList();
    }

    public static List<EstablishmentRespose> toEstablishmentResponse(List<Establishment> establishment) {
        return establishment.stream().map(EstablishmentMapper::toEstablishmentResponse).collect(Collectors.toList());
    }
}
