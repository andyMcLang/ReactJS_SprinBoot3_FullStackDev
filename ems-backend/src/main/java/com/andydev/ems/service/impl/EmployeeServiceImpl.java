package com.andydev.ems.service.impl;

import com.andydev.ems.dto.EmployeeDto;
import com.andydev.ems.entity.Employee;
import com.andydev.ems.exception.ResourceNotFoundException;
import com.andydev.ems.mapper.EmployeeMapper;
import com.andydev.ems.repository.EmployeeRepository;
import com.andydev.ems.service.EmployeeService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {
    private EmployeeRepository employeeRepository;

    @Override
    public EmployeeDto createEmployee(EmployeeDto employeeDto) {
        Employee employee = EmployeeMapper.mapToEmployee(employeeDto);
        Employee savedEmployee = employeeRepository.save(employee);
        return EmployeeMapper.mapToEmployeeDto(savedEmployee);
    }

    @Override
    public EmployeeDto getEmployeeById(Long employeeId) {
        Employee employee = employeeRepository.findById(employeeId).orElseThrow(()
                -> new ResourceNotFoundException
                ("Tyontekijaa ei löytynyt tällä id-numerolla: " + employeeId));
        return EmployeeMapper.mapToEmployeeDto(employee);
    }
}
